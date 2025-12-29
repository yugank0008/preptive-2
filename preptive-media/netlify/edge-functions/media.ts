export default async (request: Request) => {
  const url = new URL(request.url);

  // Supabase public bucket base URL
  const target = `https://gwptkkewewqekdmqowbl.supabase.co/storage/v1/object/public/media${url.pathname}`;

  const response = await fetch(target, {
    headers: {
      'User-Agent': 'Netlify-Edge',
    },
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') || '',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
