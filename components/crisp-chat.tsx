"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b52a3921-5c8d-431f-8b11-f39d01162a37");
  }, []);

  return null;
};
