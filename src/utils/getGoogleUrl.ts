import { GoogleAuthProvider } from "firebase/auth";

export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/auth`;

  const options = {
    redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT as string,
    client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,

    response_type: "code",
    access_token_url: "https://oauth2.googleapis.com/token",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/admin.reports.audit.readonly",
      "https://www.googleapis.com/auth/cloud-platform.read-only",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    state: "random_string",
  };

  const qs = new URLSearchParams(options);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    login_hint: from,
  });

  const url = `${rootUrl}?${qs.toString()}`;


  return url;
};
