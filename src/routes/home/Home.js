/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home({ news }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>知乎日报最新内容</h1>
        <ul className={s.news}>
          {news.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <a className={s.newsTitle} href={'http://daily.zhihu.com/story/' + item.id}>{item.title}</a>
              <img className={s.newsImage} src={item.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    ga_prefix: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(Home, s);
