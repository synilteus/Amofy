import React from "react";
import { ISongInfo, Song } from "../Song/Song";
import styles from "./Playlist.module.scss";
import { IPrimary, IProps } from "../../slices/Song";
import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import { components } from "../../slices"
const songList: ISongInfo[] = [
  {
    imageLink: "./assets/out.jpg",
    title: "Going Out Tonight ",
    album: "Going Out Tonight ",
    duration: "3:21",
  },
  {
    imageLink: "./assets/nothappy.jpg",
    title: "They're not happy about me",
    album: "They're not happy about me",
    duration: "3:59",
  },
  {
    imageLink: "./assets/american.png",
    title: "Peacemaker",
    album: "American Idiot",
    duration: "3:25",
  },
  {
    imageLink: "./assets/father.jpg",
    title: "Graffitia",
    album: "Father of all...",
    duration: "3:20",
  },
];
interface IPlaylist{
  slices: SliceZoneLike<SliceLike<string>>;
  setSong: (data: IPrimary) => void;
}

export const Playlist = (props: IPlaylist) => {

  return (
    <div className={styles.playlist}>
      <div className={styles["table-header"]}>
        <span className={styles["songs-nr"]}>#</span>
        <span className={styles["song-cover"]}>Cover</span>
        <span className={styles["song-title"]}>Title</span>
        <span className={styles["song-album"]}>Album</span>
        <span className={styles["song-duration"]}>Duration</span>
      </div>
       <div id="songs-wrapper" className={styles["songs"]}>
        {/* <Song index={1} songInfo={songList[0]} /> */}
        {/* {songList.map(function (details, index){
            return <Song index={index + 1} songInfo={details} />
        })} */}
        <SliceZone slices={props.slices} components = {components} />
      </div>
    </div>
  );
};
