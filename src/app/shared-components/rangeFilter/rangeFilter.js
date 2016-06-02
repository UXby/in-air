export default () => {
    return (items, property, min, max)  => {
        return items.filter((item) => {
            return item[property] >= min && item[property] <= max;
        });
    }
}