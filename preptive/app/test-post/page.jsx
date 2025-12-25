// app/test-post/page.jsx
import { createClient } from '@/utils/supabase/server';

export default async function TestPage() {
  const supabase = createClient();
  
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', 'ssc-chsl-syllabus')
    .eq('status', 'published')
    .single();

  return (
    <div>
      <h1>Test Post Query</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}