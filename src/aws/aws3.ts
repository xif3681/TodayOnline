/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// import { fileURLToPath } from "url";
import dayjs from "dayjs";

// snippet-start:[s3.JavaScript.buckets.uploadV3]
import { PutObjectCommand, DeleteObjectCommand, S3 , PutObjectCommandInput, ObjectCannedACL, PutObjectCommandOutput} from "@aws-sdk/client-s3";

import s3Config from "../../awss3config_luo.json";


export const S3UrlDomain = s3Config.domain;

export type s3ImaageType = {

  s3url: string;
  key: string;
  bucket: string
  response?: PutObjectCommandOutput;
}


export const config  = {
  region: s3Config.region, //aws服务器所在地区编号
  apiVersion: s3Config.apiVersion, // 2006-03-01
  credentials: {
    secretAccessKey: s3Config.secretAccessKey,
    accessKeyId: s3Config.accessKeyId,
  },
};

const client = new S3(config);

export const Aws3Update = async (file: any, bucket = s3Config.Bucket) => {
  const key =  dayjs().unix() + file.name; //图片名称
  const uploadParams : PutObjectCommandInput = {
    Bucket: bucket, //桶名称
    Key: key,
    Body: file, // file
    ACL: 'public-read', // s3Config.ACL , //类型
  };
  const command = new PutObjectCommand({
    ...uploadParams,
  });

  // https://tripgroupactivityimage.s3.ap-southeast-1.amazonaws.com/ad4.jpg1700061106

  const s3url = `https://${bucket}.${s3Config.serviceName}.${s3Config.region}.${s3Config.domain}/${key}`;

  try {
    const response = await client.send(command);
    return { response, s3url, key, bucket };
  } catch (err) {
    console.error(err);
  }
};

export const BlogAws3Update = async (file: any,arrayBuffer: any, bucket = s3Config.BlogBucket) => {

  const key =  dayjs().unix() + file.name; //图片名称
  const uploadParams : PutObjectCommandInput = {
    Bucket: bucket, //桶名称
    Key: key,
    Body: arrayBuffer, // file
    ACL: 'public-read', // s3Config.ACL , //类型
  };
  const command = new PutObjectCommand({
    ...uploadParams,
  });

  // https://tripgroupactivityimage.s3.ap-southeast-1.amazonaws.com/ad4.jpg1700061106

  const s3url = `https://${bucket}.${s3Config.serviceName}.${s3Config.region}.${s3Config.domain}/${key}`;

  try {
    await client.send(command);
    return { url : s3url};
  } catch (err) {
    console.error(err);
  }
};

export const Aws3Delete = async (bucket = s3Config.Bucket, Key: string) => {
  const command = new DeleteObjectCommand({
    Bucket: bucket,
    Key: Key,
  });

  try {
    const response = await client.send(command);
    return response;
  } catch (err) {
    console.error(err);
  }
};
