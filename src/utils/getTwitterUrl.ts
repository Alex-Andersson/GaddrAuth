export const getTwitterkUrl = (from: string) => {
    const rootUrl = `https://www.tiktok.com/auth/authorize/`;
  
    const options = {
      redirect_uri: import.meta.env.VITE_TIKTOK_OAUTH_REDIRECT as string,
      client_Key: import.meta.env.VITE_TIKTOK_OAUTH_CLIENT_KEY as string,
      response_type: "code",
      scope: "user.info.basic,user.info.email,user.info.phone_number",
      state: from,
    };
  
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
  };