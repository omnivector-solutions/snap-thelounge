module.exports = {
    public: false,
    host: "0.0.0.0",
    port: 9000,
    bind: undefined,
    reverseProxy: false,
    theme: "example",
    prefetch: true,
    prefetchStorage: true,
    prefetchMaxImageSize: 2048,
    displayNetwork: true,
    lockNetwork: false,
    useHexIp: false,
    webirc: null,
    logs: {
        format: "YYYY-MM-DD HH:mm:ss",
        timezone: "UTC+00:00",
    },

    maxHistory: 100000,

    defaults: {
        name: "Freenode",
        host: "chat.freenode.net",
        port: 6697,
        password: "",
        tls: true,
        nick: "lounge-user",
        username: "lounge-user",
        realname: "The Lounge User",
        join: "#thelounge",
    },

    transports: ["polling", "websocket"],

    leaveMessage: "The Lounge - https://thelounge.github.io",

    identd: {
        enable: false,
        port: 113,
    },

    oidentd: null,

    debug: {
        ircFramework: false,
        raw: false,
    },
};
