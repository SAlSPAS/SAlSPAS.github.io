import React, { useEffect, useRef } from 'react';

export default function IpodSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const attemptLogin = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        iframe.onload = () => {
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const usernameInput = iframeDoc.querySelector('input[name="username"]') as HTMLInputElement;
              const passwordInput = iframeDoc.querySelector('input[name="password"]') as HTMLInputElement;
              const loginButton = iframeDoc.querySelector('button[type="submit"]') as HTMLButtonElement;
              if (usernameInput && passwordInput && loginButton) {
                usernameInput.value = 'saispas';
                passwordInput.value = 'Isaac@1234';
                loginButton.click();
              }
            }
          } catch (error) {
            console.error('Error attempting login:', error);
          }
        };
      }
    };
    attemptLogin();
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md h-[600px]">
        <iframe
          ref={iframeRef}
          src="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%2F%3Fresponse_type%3Dcode%26client_id%3D5b1b349316964af885d540a508036acb%26scope%3Duser-read-private%2Buser-read-email%2Buser-library-read%2Buser-follow-read%2Bplaylist-read-collaborative%2Bplaylist-read-private%2Bstreaming%2Buser-read-playback-state%2Buser-read-currently-playing%2Buser-modify-playback-state%26redirect_uri%3Dhttps%253A%252F%252Ftannerv.com%252Fipod%26state%3D3b0a9637-7bd7-4439-836e-54c7bcf0de7d"
          className="w-full h-full border-none"
          title="Spotify Embed"
        />
      </div>
    </div>
  );
}