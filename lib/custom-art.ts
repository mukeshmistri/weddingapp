"use client";

import { useCallback, useEffect, useState } from "react";
import { customArtConfig, type CustomArtEntry, type CustomArtKey } from "@/lib/custom-art.config";

export function resolveArtSource(entry: CustomArtEntry): string | null {
  const custom = entry.customSrc?.trim();
  if (custom) {
    return custom;
  }
  return entry.defaultSrc;
}

export function useResolvedArt(key: CustomArtKey) {
  const entry = customArtConfig[key];
  const [src, setSrc] = useState<string | null>(() => resolveArtSource(entry));

  useEffect(() => {
    setSrc(resolveArtSource(entry));
  }, [entry.customSrc, entry.defaultSrc]);

  const onError = useCallback(() => {
    if (entry.defaultSrc && src !== entry.defaultSrc) {
      setSrc(entry.defaultSrc);
      return;
    }
    setSrc(null);
  }, [entry.defaultSrc, src]);

  return {
    src,
    onError,
    entry,
  };
}
