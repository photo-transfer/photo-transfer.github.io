# PhotoTransfer App Store Submission Checklist

## URLs

- Marketing URL / 营销网址: `https://<username>.github.io/<repo>/`
- Support URL / 技术支持网址: `https://<username>.github.io/<repo>/support/`
- Privacy Policy URL / 隐私政策网址: `https://<username>.github.io/<repo>/privacy/`

If this repository is published as a user site, such as `jerryt92.github.io`, remove the repository path:

- `https://jerryt92.github.io/`
- `https://jerryt92.github.io/support/`
- `https://jerryt92.github.io/privacy/`

## Required App Store Connect Information

### App Information
- App name: `PhotoTransfer - Utility` or localized Chinese name.
- Subtitle: short description, up to 30 characters per locale.
- Bundle ID: `io.github.jerryt92.PhotoTransfer`.
- SKU: any unique internal identifier, for example `phototransfer-ios`.
- Category: Utilities or Photo & Video.

### Pricing and Availability
- Price or free tier.
- Countries or regions where the app is available.
- Whether the app is available on iPhone only, iPad, or Apple silicon Mac.

### App Privacy
For the current implementation, the website and code assume:

- No third-party advertising tracking.
- No third-party analytics SDK.
- No developer-operated server upload for photos, videos, or files.
- The app accesses user-selected files/folders and the photo library for local import only.

Review Apple’s App Privacy questionnaire carefully before submitting. If future versions add analytics, crash reporting, cloud upload, accounts, or support email collection, update both App Privacy answers and the privacy policy.

### Review Information
- Contact first name and last name.
- Phone number.
- Email address: `jerrytian92@outlook.com`.
- Demo account: not required if the app has no login.
- Notes for reviewer: explain that the app imports media from Files into Photos and may require selecting a folder with photos/videos.

### Screenshots and Metadata
- iPhone 6.5-inch screenshots: use files in `AppStoreMarketing/output/`.
- Promotional text.
- Description.
- Keywords.
- Support URL.
- Privacy Policy URL.

The bilingual copy is available in:

`AppStoreMarketing/app_store_copy.md`

### Age Rating
Answer based on actual app behavior. For the current app, there is no user-generated public content, gambling, commerce, unrestricted web access, or social features.

### Export Compliance
Answer according to Apple’s encryption questions. If the app only uses standard Apple platform security and no custom encryption, follow Apple’s guidance for standard encryption.
