import { type EmailOtpType } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/perfil';
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;

  if (token_hash && type) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      console.log('🚀 ~ GET ~ data:', data);
      return NextResponse.redirect(redirectTo);
    }
  }

  redirectTo.pathname = '/auth/auth-code-error';
  return NextResponse.redirect(redirectTo);
}

//? magiclink auth endpoint
// import { type EmailOtpType } from '@supabase/supabase-js';
// import { type NextRequest } from 'next/server';
// import { createClient } from '@/utils/supabase/server';
// import { redirect } from 'next/navigation';

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const token_hash = searchParams.get('token_hash');
//   const type = searchParams.get('type') as EmailOtpType | null;
//   const next = searchParams.get('next') ?? '/';

//   if (token_hash && type) {
//     const supabase = createClient();

//     const { data, error } = await supabase.auth.verifyOtp({
//       type,
//       token_hash,
//     });
//     if (!error) {
//       console.log('🚀 ~ GET ~ data:', data);
//       redirect(next);
//     }
//     console.log('🚀 ~ GET ~ error:', error);
//   }
//   redirect('/error');
// }
