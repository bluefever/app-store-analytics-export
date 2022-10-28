/**
 * Mappings of metric names from the API to intenally used values
 * See link in https://bugzilla.mozilla.org/show_bug.cgi?id=1576788#c11
 */

const metricData = {
  activeDevices: {
    name: "active_devices",
    description:
      "The number of devices with atleast one session during the selected period. Only devices with iOS 8 and tvOS 9 or later are included.",
    optin: true,
    type: "INT64",
  }
};

const dimensionToTableSuffix = {
  appReferrer: "app_referrer",
  appVersion: "app_version",
  campaignId: "campaign",
  domainReferrer: "web_referrer",
  platform: "platform",
  platformVersion: "platform_version",
  region: "region",
  source: "source",
  storefront: "storefront",
  [null]: "",
};

exports.metricData = metricData;
exports.dimensionToTableSuffix = dimensionToTableSuffix;
