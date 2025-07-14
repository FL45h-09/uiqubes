import { NextResponse } from 'next/server';

const GITHUB_REPO = 'uibrix'; // your repo
const GITHUB_OWNER = 'FL45h-09'; // your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  const contributorsRes = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    }
  );

  if (!contributorsRes.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch contributors list' },
      { status: contributorsRes.status }
    );
  }

  const rawContributors = await contributorsRes.json();

  // Fetch extended data for each contributor in parallel
  const contributors = await Promise.all(
    rawContributors.map(async (contributor: any) => {
      const userRes = await fetch(`https://api.github.com/users/${contributor.login}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      });

      const user = userRes.ok ? await userRes.json() : {};

      return {
        login: contributor.login,
        avatar_url: contributor.avatar_url,
        profile_url: contributor.html_url,
        contributions: contributor.contributions,

        // Extended user data
        name: user.name || null,
        bio: user.bio || null,
        location: user.location || null,
        // website: user.blog || null,
        // twitter: user.twitter_username || null,
        followers: user.followers || 0,
        public_repos: user.public_repos || 0,
        // created_at: user.created_at || null,
      };
    })
  );

  return NextResponse.json({ contributors });
}