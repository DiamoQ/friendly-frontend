import './Button.scss'
import classNames from 'classnames'
import {Icon} from "minista";

const Button = (props) => {
    const {
        className,
        href,
        target,
        // '' (default) | 'transparent' |
        mode = '',
        label,
        isLabelHidden,
        type = 'button',
        iconName,
        // 'before' | 'after'
        iconPosition,
        hasFillIcon,
        extraAttrs,
    } = props

    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button';
    const linkProps = { href, target };
    const buttonProps = { type };
    const specificProps = isLink ? linkProps : buttonProps;
    const title = isLabelHidden ? label : undefined;
    const iconComponent = iconName && (
        <Icon
            className="button__icon"
            name={iconName}
            hasFillIcon={hasFillIcon}
        />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button-${mode}`]: mode,
            })}
            aria-labelledby={title}
            title={title}
            {...specificProps}
            {...extraAttrs}
        >
            {iconPosition === 'before' && iconComponent}
            {!isLabelHidden && (
                <span className="button__label">
                    {label}
                </span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}

export default Button