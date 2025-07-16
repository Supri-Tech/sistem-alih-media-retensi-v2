import { env } from '$env/dynamic/private';

export const load = async () => {
  return {
    appName: env.PUBLIC_APP_NAME
  };
};