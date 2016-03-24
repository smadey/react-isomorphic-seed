/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const NewsItemType = new ObjectType({
  name: 'NewsItem',
  fields: {
    id: { type: new NonNull(IntType) },
    title: { type: new NonNull(StringType) },
    image: { type: new NonNull(StringType) },
    type: { type: new NonNull(IntType) },
    ga_prefix: { type: new NonNull(StringType) },
  },
});

export default NewsItemType;
