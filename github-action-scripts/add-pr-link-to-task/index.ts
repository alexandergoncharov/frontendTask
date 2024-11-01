import axios from "axios";

// Replace these constants with your actual values
const API_URL = "https://api.tracker.yandex.net/v2/issues"; // Yandex Tracker API URL
// const API_TOKEN = process.env.YANDEX_TRACKER_TOKEN; // Get the Yandex Tracker API token from environment variables
const API_TOKEN =
  "y0_AgAAAAAvLyFdAAyQYAAAAAETfEeqAAAHIF5toBxLI5Zd1BuA8x4w0dfNuA"; // Get the Yandex Tracker API token from environment variables
const ORG_ID = "bpf2d7ig5637b161ugvh";

const headers = {
  headers: {
    Authorization: `OAuth ${API_TOKEN}`, // Use your Yandex Tracker API token
    "Content-Type": "application/json",
    "X-Cloud-Org-ID": ORG_ID,
  },
};

interface Comment {
  text: string;
}

declare var process: {
  env: {
    TITLE: string;
    PR_NUMBER: string;
    REPO_NAME: string;
  };
};
const { TITLE, PR_NUMBER, REPO_NAME } = process.env;

const regexForTaskId = /\b(LALA-\d+)\b/g;

async function sendPrComment(): Promise<void> {
  try {
    const taskId = getTaskId();
    const comments: Comment[] = await getComments(taskId);
    // const prCommentText = `[${TITLE}](https://github.lmru.tech/${REPO_NAME}/pull/${PR_NUMBER})`;
    const prCommentText = `[${TITLE}](https://github.com/${REPO_NAME}/pull/${PR_NUMBER})`;

    if (isPrCommentExist(comments, prCommentText)) {
      console.log(`PR comment already exist`);
      return;
    }

    await addComment(prCommentText, taskId);
  } catch (error) {
    console.error(
      "Error fetching task comments:",
      error.response ? error.response.data : error.message
    );
  }
}

function isPrCommentExist(comments: Comment[], commentText: string) {
  const foundPrComments = comments.filter((comment) =>
    comment.text.includes(commentText)
  );
  if (foundPrComments.length > 0) {
    return true;
  }

  return false;
}

async function getComments(issueId: string) {
  const response = await axios.get(`${API_URL}/${issueId}/comments`, headers);

  return response.data;
}

async function addComment(commentText: string, taskId: string) {
  await axios.post(
    `${API_URL}/${taskId}/comments`,
    { text: commentText },
    headers
  );
}

function getTaskId() {
  const regExpResult = TITLE.toUpperCase().match(regexForTaskId);
  if (!regExpResult || regExpResult.length > 1) {
    throw new Error(`Wrong title for ${TITLE}`);
  }
  return regExpResult[0];
}

// Calling the function
sendPrComment();

// src/script.ts
// const myVariable = process.env.TITLE || 'Default Value';
// console.log(`MY_VARIABLE: ${myVariable}`);
