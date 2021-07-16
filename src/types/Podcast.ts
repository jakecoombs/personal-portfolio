export interface IPodcast {
  id: string;
  name: string;
  url: string;
}

export interface IPodcasts {
  podcasts: IPodcast[];
}

export type IPodcastMutation = {
  createPodcast: IPodcast;
  updatePodcast: IPodcast;
  deletePodcast: IPodcast;
};
