export const fetchify = (isFetched, content) => {
    if (!isFetched) {
        return <h3 className='fetchify'>Загрузка...</h3>;
    }

    if (content) {
        return content;
    }

    return null;
};
