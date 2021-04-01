export default {
    development: {
        baseurl: {
            f2pAPI: "https://dev.farmtoplate.io",
        },
        f2pDashboardUrl: "",
        helpcenterUrl: "",
        omniChannelUrl: "",
        resources: {
            defaultImageUrl: "/img/avatars/default.png",
        },
        services: {
            baseurl: "https://kong-api",
        },
        thirdPartyIntegration: {
            sentry: {
            },
            analytics: {
                enable: false,
            },
        },
        enableDevTools: true,
    },
    test: {
        baseurl: {
            f2pAPI: "https://alpha.farmtoplate.io",
        },
        f2pDashboardUrl: "",
        helpcenterUrl: "",
        omniChannelUrl: "",
        resources: {
            defaultImageUrl: "/img/avatars/default.png",
        },
        services: {
            baseurl: "https://kong-api",
        },
        thirdPartyIntegration: {
            sentry: {
            },
            analytics: {
                enable: false,
            },
        },
        enableDevTools: true,
    },
    staging: {
        baseurl: {
            f2pAPI: "https://staging.farmtoplate.io",
        },
        f2pDashboardUrl: "",
        helpcenterUrl: "",
        omniChannelUrl: "",
        resources: {
            defaultImageUrl: "/img/avatars/default.png",
        },
        services: {
            baseurl: "https://kong-api",
        },
        thirdPartyIntegration: {
            sentry: {
            },
            analytics: {
                enable: false,
            },
        },
        enableDevTools: true,
    },

    production: {
        baseurl: {
            f2pAPI: "https://prod.farmtoplate.io",
        },
        f2pDashboardUrl: "",
        helpcenterUrl: "",
        omniChannelUrl: "",
        resources: {
            defaultImageUrl: "/img/avatars/default.png",
        },
        services: {
            baseurl: "https://kong-api",
        },
        thirdPartyIntegration: {
            sentry: {
            },
            analytics: {
                enable: false,
            },
        },
        enableDevTools: true,
    },
};
