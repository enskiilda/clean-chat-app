"use server";

import { Sandbox } from "@e2b/desktop";
import { resolution } from "./tool";

const E2B_API_KEY = "e2b_ef2cb8264c1520ac4bb3a9165c39a2c2efe28b9b";

export const getDesktop = async (id?: string) => {
  try {
    if (id) {
      const connected = await Sandbox.connect(id, { apiKey: E2B_API_KEY });
      const isRunning = await connected.isRunning();
      if (isRunning) {
        return connected;
      }
    }

    const desktop = await Sandbox.create({
      resolution: [resolution.x, resolution.y],
      timeoutMs: 3600000,
      apiKey: E2B_API_KEY,
    });
    await desktop.stream.start();
    return desktop;
  } catch (error) {
    console.error("Error in getDesktop:", error);
    throw error;
  }
};

export const getDesktopURL = async (id?: string) => {
  try {
    const desktop = await getDesktop(id);
    const streamUrl = desktop.stream.getUrl();

    return { streamUrl, id: desktop.sandboxId };
  } catch (error) {
    console.error("Error in getDesktopURL:", error);
    throw error;
  }
};

export const killDesktop = async (id: string = "desktop") => {
  const desktop = await getDesktop(id);
  await desktop.kill();
};
