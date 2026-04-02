import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_TO = "talhaahmadqureshi@gmail.com";
const NOTIFY_FROM = "onboarding@resend.dev";

interface RoomInfo {
  id: string;
  name: string;
  hostName: string;
  team1Name: string;
  team2Name: string;
  totalRounds: number;
  maxPlayers: number;
  createdAt: Date;
}

export function notifyRoomCreated(room: RoomInfo): void {
  const link = `https://friendlyfeud.fun/room/${room.id}`;
  const ts = room.createdAt.toUTCString();

  const html = `
    <table style="font-family:sans-serif;font-size:14px;color:#222;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Room</td><td>${room.name} <span style="color:#888">(${room.id})</span></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Host</td><td>${room.hostName}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Teams</td><td>${room.team1Name} vs ${room.team2Name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Rounds</td><td>${room.totalRounds}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Max players</td><td>${room.maxPlayers}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Created</td><td>${ts}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Link</td><td><a href="${link}">${link}</a></td></tr>
    </table>
  `;

  const text = [
    `Room: ${room.name} (${room.id})`,
    `Host: ${room.hostName}`,
    `Teams: ${room.team1Name} vs ${room.team2Name}`,
    `Rounds: ${room.totalRounds}`,
    `Max players: ${room.maxPlayers}`,
    `Created: ${ts}`,
    `Link: ${link}`,
  ].join("\n");

  void resend.emails
    .send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject: `New room created: ${room.name}`,
      html,
      text,
    })
    .catch((err: unknown) => {
      console.error("[notify] Failed to send room-created email:", err);
    });
}
