import { clsx } from 'clsx';

const Text = ({ size = 'base', variant = 'white', as = 'p', className, children }) => {

    const Tag = as;

    const sizes = {
        sm: 'font-medium text-sm leading-normal',
        base: 'font-medium text-base leading-normal',
        md: 'font-semibold text-xl md:text-3xl leading-relaxed',
        lg: 'font-bold text-2xl md:text-5xl leading-relaxed',
        display: 'text-5xl font-bold leading-relaxed sm:text-6xl xl:max-w-3xl text-gray-50'
    }

    const variants = {
        gray: 'text-gray-600',
        white: 'text-white',
        dark: 'text-gray-900'
    }

    return (
        <Tag className={clsx(sizes[size], variants[variant], className)}>
            {children}
        </Tag>
    )
}

export default Text;