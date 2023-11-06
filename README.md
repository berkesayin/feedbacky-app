# Feedbacky

## Contents

- [What Is Feedbacky?](#feedbacky)
- [Demo](#demo)
- [Install Via NPM](#npm)
- [Install Via CDN](#cdn)
- [Props Table](#props)
- [How To Get A Google Sheet Id?](#google-sheet)
- [What I Learned](#learn)
- [Notes For Reviewer](#notes)

> **Feedbacky:** A Feedback is a product integrable with web applications.

## What Is Feedbacky? <a name="feedbacky"></a>

- Feedbacky is a product developed to gather comments and feedbacks of customers about their user experiences. It is integrable with web applications. You can follow the steps to easily use it.

## Demo <a name="demo"></a>

- Feedbacky Demo: https://feedbacky-demo.netlify.app/

- A button with icon and modal exists at demo. It can be integrated to other projects following the steps below. The development of background at homepage or wherever Feedbacky is used up to the user.

## Installation <a name="usages"></a>

Feedbacky can be integrated to web projects through 2 different ways.

- Via NPM Package
- Via CDN

### Via NPM <a name="npm"></a>

- You can follow to steps to install the NPM package, import the `Feedbacky` component and use it.

#### Install

```bash
npm i awesome-feedbacky
```

#### Import Component

```bash
import { Feedbacky } from "awesome-feedbacky";
```

#### Use The Component

```js
export const App = () => {
  return (
    <>
      <Feedbacky
        googleSheetId="95a57d16-dcc3-4f57-8e24-dfbba8e9e786"
        modalSuccessTitle="Thanks for sharing your feedback!"
        sendButtonText="Send Feedback"
        nameInputPlaceholder="Name"
        surnameInputPlaceholder="Surname"
        feedbackInputPlaceholder="Feedback?"
        modalSuccessIconSize={100}
        modalSuccessIconColor="green"
        feedbackyButtonIconSize={45}
        modalTitle="Share what you think with us..."
      />
    </>
  );
};
```

### Usage Via CDN <a name="cdn"></a>

- Feedbacky can be integrated also via CDN with `script` tags.

- Go to main `HTML` file. `(index.html)`

#### feedbacky-container

- Add a `div` element with the ID of `feedbacky-container`.

```html
<div id="feedbacky-container"></div>
```

#### CDN

- Add `CDN` using `script` tag. Then, customize Feedbacky component with `feedbacky.run()`.

```js
<script src="https://cdn.jsdelivr.net/npm/feedbacky-cdn@1.0.0/index.js"></script>

<script>
    feedbacky.run({
        googleSheetId: "95a57d16-dcc3-4f57-8e24-dfbba8e9e786",
        modalSuccessTitle: "Thanks for sharing your feedback!",
        sendButtonText: "Send Feedback",
        nameInputPlaceholder: "Your Name",
        surnameInputPlaceholder: "Your Surname",
        feedbackInputPlaceholder: "Your Feedback",
        modalSuccessIconSize: 100,
        modalSuccessIconColor: "green",
        feedbackyButtonIconSize: 45,
        modalTitle: "Share what you think with us...",
    });
</script>
```

## Props Table <a name="props"></a>

| Prop Name                  | Prop Type | Value (E.G.)                           | Requirement |
| :------------------------- | :-------- | :------------------------------------- | :---------- |
| `googleSheetId`            | `string`  | "95a57d16-dcc3-4f57-8e24-dfbba8e9e786" | `required`  |
| `modalSuccessTitle`        | `string`  | "Thanks for sharing your feedback!"    | `optional`  |
| `sendButtonText`           | `string`  | "Send Feedback"                        | `optional`  |
| `nameInputPlaceholder`     | `string`  | "Your Name..."                         | `optional`  |
| `surnameInputPlaceholder`  | `string`  | "Your Surname..."                      | `optional`  |
| `feedbackInputPlaceholder` | `string`  | "Your Feedback..."                     | `optional`  |
| `modalSuccessIconSize`     | `number`  | 100                                    | `optional`  |
| `modalSuccessIconColor`    | `string`  | green                                  | `optional`  |
| `feedbackyButtonIconSize`  | `number`  | 45                                     | `optional`  |
| `modalTitle`               | `string`  | "Share what you think with us..."      | `optional`  |

## How To Get A Google Sheet ID? <a name="google-sheet"></a>

- The data is saved in a Google Sheet file for Feedbacky App. You need to send a value for `googleSheetId` prop to use it.

- Go to Google Sheets to create a blank sheet or use an existing one.
  https://www.google.com/sheets/about/

- Open an online table and rename it.

- Change settings for your share options. (Private or Public etc.)

- Copy your link for your Google Sheet table.

- Go to `sheet.best`.

- Sheet.best turns spreadsheets into REST APIs. Connect a gsheet or a csv to anything.

- Sign In with your Google account.

- Click on "Add your first connection to start".

- `Connection Name`: FeedbackData,

- `Connection URL`: Paste here your Google Sheet File link,

- Click connect (connection created successfully).

- Go to the admin panel for sheet.best.
  https://sheet.best/admin

- Go to details for your connection. `(FeedbackData)`

- Get Connection URL:
  E.g: `https://sheet.best/api/sheets/e4dbe27a-31e1-4578-a692-9b85b15dc39e`
  `googleSheetId`: `e4dbe27a-31e1-4578-a692-9b85b15dc39e`

- Use this URL for the post request API. `(E.g: axios.post())`

- Use this ID as your `googleSheetId` value.

## What I Learned <a name="learn"></a>

I grasped subjects below better:

- Jest and mocking
- Bundling processes
- Easily integrating projects with CDN or NPM
- State management with Context API
- Clean Code
- Tailwind

## Notes For Reviewer <a name="notes"></a>

> **Notes:** Here is the additional part for the development notes.

- I needed to use `console.log()` at `main.tsx` to add the `feedbacky` object to the CDN bundle. If feedbacky object was not used there, the bundler sees it as a dead code, and so it doesn't put it in the bundle file.
