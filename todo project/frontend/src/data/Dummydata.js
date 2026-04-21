export const DUMMY_USER = {
    fullName: "Alex Rivera",
    userEmail: "alex@example.com",
};

export const DUMMY_TASKS = [
    {
        _id: "1",
        title: "Design new landing page",
        description:
            "Create wireframes and high-fidelity mockups for the product's landing page redesign. Focus on conversion optimization.",
        isCompleted: false,
        image:
            "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
        _id: "2",
        title: "Fix authentication bug",
        description:
            "Users report being logged out randomly. Investigate JWT expiry logic and cookie handling on the backend.",
        isCompleted: true,
        image: null,
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
        _id: "3",
        title: "Write API documentation",
        description:
            "Document all REST endpoints with request/response examples using OpenAPI spec. Include error codes.",
        isCompleted: false,
        image:
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        _id: "4",
        title: "Set up CI/CD pipeline",
        description:
            "Configure GitHub Actions to run tests and deploy to staging automatically on every PR merge.",
        isCompleted: true,
        image: null,
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
];