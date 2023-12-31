import React from 'react';
import Styles from 'components/spinner/Spinner.module.scss';

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (props: Props) => {
    return (
        <div {...props} className={[Styles.spinner, props.className].join(' ')} >
            <div /><div /><div /><div />
        </div>
    )
}

export default Spinner