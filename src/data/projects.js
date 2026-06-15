export const projects = [
  {
    id: "code-editor",
    title: "Browser-Based Code Editor",
    tagline: "A powerful, lightweight coding environment that runs entirely in the browser",
    problem:
      "Developers often need lightweight coding environments without installing heavy IDEs. Existing online editors lack the responsiveness and feature depth needed for productive coding sessions, creating friction for quick prototyping and learning.",
    solution:
      "Built a browser-based code editor that provides real-time syntax highlighting, multi-language support, and an intuitive development environment — all within the browser. Zero installation required.",
    features: [
      "Real-time syntax highlighting with multi-language support",
      "Live code preview and instant execution",
      "Integrated file management system",
      "Responsive, distraction-free UI",
      "Clean, extensible architecture for future enhancements",
      "Theme customization and editor preferences",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Monaco Editor", "JavaScript", "CSS3"],
    challenges: [
      "Implementing real-time syntax parsing without performance degradation",
      "Managing editor state across multiple files and tabs",
      "Creating a responsive layout that works across different screen sizes",
      "Handling code execution securely in the browser environment",
    ],
    results: [
      "Achieved sub-100ms response times for syntax highlighting",
      "Support for 10+ programming languages",
      "Clean, modular codebase with reusable components",
    ],
    futureImprovements: [
      "Collaborative editing with real-time cursor sharing",
      "Terminal integration for command execution",
      "Git integration for version control",
      "AI-powered code suggestions",
    ],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #4F8CFF 0%, #7B61FF 100%)",
  },
  {
    id: "video-chat",
    title: "Real-Time Video Chat Application",
    tagline: "Peer-to-peer video communication powered by WebRTC and Socket.IO",
    problem:
      "Remote communication tools often suffer from high latency, poor user experience, and complex setup processes. There's a growing need for lightweight, peer-to-peer video calling solutions with minimal overhead and maximum reliability.",
    solution:
      "Developed a real-time video chat application leveraging WebRTC for direct peer-to-peer connections and Socket.IO for signaling, enabling low-latency, high-quality video communication without routing through central servers.",
    features: [
      "Peer-to-peer video and audio streaming via WebRTC",
      "Real-time signaling server with Socket.IO",
      "Room-based chat system for organized conversations",
      "Responsive design optimized for desktop and mobile",
      "Connection state management with graceful error handling",
      "Screen sharing capabilities",
    ],
    technologies: ["React.js", "Node.js", "WebRTC", "Socket.IO", "Express.js", "CSS3"],
    challenges: [
      "Implementing NAT traversal for reliable peer-to-peer connections",
      "Managing WebRTC offer/answer exchange with proper error handling",
      "Handling network fluctuations and reconnection scenarios",
      "Ensuring cross-browser compatibility for media APIs",
    ],
    webrtcExplanation:
      "WebRTC (Web Real-Time Communication) enables direct peer-to-peer media exchange between browsers. The application uses STUN/TURN servers for NAT traversal, ensuring connections work across different network configurations.",
    socketioExplanation:
      "Socket.IO provides the signaling layer — exchanging SDP offers/answers and ICE candidates between peers in real-time. The server acts as a lightweight relay for connection setup, while the actual media streams flow directly between users.",
    results: [
      "Achieved sub-200ms connection establishment time",
      "HD video streaming with adaptive quality",
      "Stable connections across various network conditions",
    ],
    futureImprovements: [
      "Group video calling with mesh/SFU architecture",
      "End-to-end encryption for enhanced privacy",
      "Chat messaging alongside video",
      "Recording and playback functionality",
    ],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #4F8CFF 100%)",
  },
];
