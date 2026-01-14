export default defineEventHandler(async (event) => {
  // Fetch posts from external API
  const config = useRuntimeConfig();
  const key = config.privateKey; // Example of accessing a private key
  return { key };
//   const res = await fetch(`${config.API_URL}/posts`);
//   const posts = await res.json();

//   return posts;
});