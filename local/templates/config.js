module.exports = {
    public: false,
    host: "0.0.0.0",
    port: 9000,
    bind: undefined,
    reverseProxy: true,
    theme: "default",
    prefetch: true,
    prefetchStorage: true,
    prefetchMaxImageSize: 2048,
    displayNetwork: true,
    lockNetwork: false,
    useHexIp: false,
    webirc: null,

    maxHistory: 1000000,

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

    leaveMessage: "The Lounge Snap - https://github.com/omnivector-solutions/snap-thelounge",

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
