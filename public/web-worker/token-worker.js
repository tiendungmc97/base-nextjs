self.onmessage = function (event) {
  const { expireTime, refreshToken } = event.data;

  const tokenExpireTime = new Date(expireTime);
  const currentTime = new Date();

  // Calculate the time until 60 seconds before the token expires
  const timeUntilRefresh = tokenExpireTime.getTime() - currentTime.getTime() - 30000;
  const isExpired = timeUntilRefresh < 0;

  const MAX_REFRESH_TOKEN_LENGTH = 5;
  if (isExpired || refreshToken.split("_")?.[1].length > MAX_REFRESH_TOKEN_LENGTH) {
    const responseMessage = { isExpired: true };
    self.postMessage(responseMessage);
    return;
  }

  self.postMessage({
    accessToken: refreshToken,
    expireTime: expireTime,
    refreshToken: refreshToken,
    isExpired: false,
  });

  // Set a timeout to refresh the token 60 seconds before it expires
  setTimeout(async () => {
    const currentTime = new Date();
    const newExpireTime = new Date(currentTime.getTime() + 180000).toISOString();
    const newAccessToken = "newAccessToken1";
    const newRefreshToken = refreshToken + 1;
    const responseMessage = {
      accessToken: newAccessToken,
      expireTime: newExpireTime,
      refreshToken: newRefreshToken,
      isExpired: false,
    };
    self.postMessage(responseMessage);
    // try {
    //   // Call the API to refresh the token
    //   const url = process.env.NEXT_PUBLIC_API_URL + "/auth/refresh-token";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({ refresh_token: refreshToken }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     const newExpireTime = data.newExpireTime;
    //     const newAccessToken = data.accessToken;
    //     const newRefreshToken = data.refreshToken;

    //     const responseMessage = {
    //       accessToken: newAccessToken,
    //       expireTime: newExpireTime,
    //       refreshToken: newRefreshToken,
    //       isExpired: false,
    //     };
    //     self.postMessage(responseMessage);
    //   } else {
    //     const errorMessage = { error: "Failed to refresh token", isExpired: true };
    //     self.postMessage(errorMessage);
    //   }
    // } catch (error) {
    //   const errorMessage = {
    //     error: "Error refreshing token: " + error.message,
    //     isExpired: true,
    //   };
    //   self.postMessage(errorMessage);
    // }
  }, timeUntilRefresh);
};
