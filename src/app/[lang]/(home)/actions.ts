"use server";

export async function getDiscordStats() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const stats = {
    active_members: 150,
    total_members: 500,
    member_statuses: {
      online: 300,
      away: 200,
      dnd: 100,
      offline: 100,
    },
  };

  return {
    active_members: stats.active_members,
    total_members: stats.total_members,
  };
}
