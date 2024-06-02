export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  
  // Format the token as a cookie string
  const cookieString = `voctoken=${token}; expires=${expiresAt.toUTCString()}; path=/`;
  
  // Set the cookie
  document.cookie = cookieString;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; Path=/; Secure; SameSite=Lax`;
}