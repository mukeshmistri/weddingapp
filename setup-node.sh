
#!/usr/bin/env bash



set -e



echo "Your current shell is=$SHELL"



if [[ -z "$JFROG_EMAIL" || -z "$JFROG_IDENTITY_TOKEN" ]]; then

  echo "ERROR: JFROG_EMAIL and JFROG_IDENTITY_TOKEN must be set."

  exit 1

fi



jfrogEmail="$JFROG_EMAIL"

jfrogIdentityToken="$JFROG_IDENTITY_TOKEN"



case "$SHELL" in

  *zsh*) ENV_FILE_PATH='.zshenv' ;;

  *bash*) ENV_FILE_PATH='.bashrc' ;;

  *) echo "Not supported shell."; exit 1 ;;

esac



sed -i '.bak' "/NPM_/d;/NVM_/d;/COMPLETION_WAITING_DOTS/d" "$HOME/$ENV_FILE_PATH"



cat <<EOF2 >> "$HOME/$ENV_FILE_PATH"

##########################################

export NPM_AUTH_KEY=${jfrogIdentityToken}

export NPM_EMAIL=${jfrogEmail}

export COREPACK_NPM_REGISTRY=https://centraluhg.jfrog.io/artifactory/glb-generic-nodejs-rem/dist

export NVM_NODEJS_ORG_MIRROR=https://centraluhg.jfrog.io/artifactory/glb-generic-nodejs-rem/dist

export NVM_AUTH_HEADER="Bearer ${jfrogIdentityToken}"

export NVM_SYMLINK_CURRENT=true

export NVM_LAZY_LOAD=true

export NVM_COMPLETION=true

export COMPLETION_WAITING_DOTS=true

export NVM_LAZY_LOAD_EXTRA_COMMANDS=('vim' 'ng')

EOF2



echo "✅ Node & npm environment configured"

exec "$SHELL"

