import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Thêm !! để convert "item.children" sang kiểu dữ liệu Boolean. Nếu trong item có children thì sẽ trả về true
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };

    return (
        <HeadlessTippy
            
            offset={[12, 8]}
            interactive
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title={current.title} onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length -1))
                            }}/>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}

        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
     children: PropTypes.node.isRequired,
     items: PropTypes.array,
     hideOnClick: PropTypes.bool,
     onChange: PropTypes.func,
}

export default Menu;