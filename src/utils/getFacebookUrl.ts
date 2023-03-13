export const getFacebookkUrl = (from: string) => {
  const rootUrl = `https://www.facebook.com/v16.0/dialog/oauth?`;

  const options = {
    redirect_uri: import.meta.env.VITE_FACEBOOK_OAUTH_REDIRECT as string,
    client_id: import.meta.env.VITE_FACEBOOK_OAUTH_CLIENT_KEY as string,
    response_type: "code",
    scope: "user.info.basic,user.info.email,user.info.phone_number",
    state: "{st=state123abc,ds=123456789}",
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};