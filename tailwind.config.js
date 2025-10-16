export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--color-bg)',
                surface: 'var(--color-surface)',
                fg: 'var(--color-fg)',
                muted: 'var(--color-muted)',
                accent: 'var(--color-accent)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
                highlight: 'var(--color-highlight)',
                secondaryAccent: 'var(--color-secondaryAccent)',
                warmAccent: 'var(--color-warmAccent)',
            },
        },
    },
    plugins: [],
}
