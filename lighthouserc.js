module.exports = {
    ci: {
        collect: {
            numberOfRuns: 1,
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', { minScore: 0.7 }],
                'categories:accessibility': ['warn', { minScore: 0.8 }],
                'categories:best-practices': ['warn', { minScore: 0.8 }],
                'categories:seo': 'off',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
