import { z } from "zod";
import env from "@next/env";

const environmentVariables = z.object({
  API_KEY: z.string(),
  NEXT_PUBLIC_MESSAGE: z.string(),
});

type EnvironmentVariables = z.infer<typeof environmentVariables>;

const projectDir = process.cwd();
env.loadEnvConfig(projectDir);

environmentVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
  }
}
