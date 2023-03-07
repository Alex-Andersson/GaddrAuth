export const getTikTokUrl = (from: string) => {
    const rootUrl = `https://www.tiktok.com/auth/authorize/`;
  
    const options = {
      redirect_uri: import.meta.env.VITE_TIKTOK_OAUTH_REDIRECT as string,
      client_Key: import.meta.env.VITE_TIKTOK_OAUTH_CLIENT_KEY as string,
      response_type: "code",
      scope: "research.data.basic,user.info.basic,video.list",
      state: from,
    };
  
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
  };