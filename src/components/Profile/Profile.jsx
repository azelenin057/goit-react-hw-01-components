import React from 'react';
import css from "./Profile.module.css";

const Profile = props => {
    return (
    <div class={css.profile}>
        <div class={css.description}>
            <img
                src={props.avatar}
                alt="User avatar"
                class={css.avatar}
            />
            <p class="name">{props.username}</p>
            <p class="tag">@{props.tag}</p>
            <p class="location">{props.location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.stats_item}>
            <span class="label">Followers</span>
            <span class="quantity">{props.stats.followers}</span>
            </li>
            <li className={css.stats_item}>
            <span class="label">Views</span>
            <span class="quantity">{props.stats.views}</span>
            </li>
            <li className={css.stats_item}>
            <span class="label">Likes</span>
            <span class="quantity">{props.stats.likes}</span>
            </li>
        </ul>
    </div>)
  };

export default Profile;