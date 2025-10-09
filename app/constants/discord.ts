export interface FHrKYga8QvAs4JSwa7X1MgKMEvsTziQPOSBISIuY5XLg {
  id:            string;
  name:          string;
  instantInvite: null;
  channels:      Channel[];
  members:       Member[];
  presenceCount: number;
}

export interface Channel {
  id: string;
  name: string;
  position: number;
}

export interface Member {
  id:            string;
  username:      string;
  discriminator: string;
  avatar:        null;
  status:        Status;
  avatarURL:     string;
  deaf?:         boolean;
  mute?:         boolean;
  selfDeaf?:     boolean;
  selfMute?:     boolean;
  suppress?:     boolean;
  channelID?:    string;
  game?:         Game;
}

export interface Game {
  name: string;
}

export enum Status {
  DND = "dnd",
  Idle = "idle",
  Online = "online",
}
