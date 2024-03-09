// 创建滑块容器
const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');

// 创建滑块项
const sliderItems = Array.from({ length: 5 }, (_, index) => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.textContent = `Slide ${index + 1}`;
    return sliderItem;
});

// 将滑块项添加到滑块容器中
sliderItems.forEach(item => sliderContainer.appendChild(item));

// 将滑块容器添加到文档主体中
document.body.appendChild(sliderContainer);

// CSS 样式
const style = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .slider-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }

    .slider-item {
        flex: 0 0 100%;
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        background-color: #f0f0f0;
    }
`;

// 创建样式标签，并将样式添加到其中
const styleTag = document.createElement('style');
styleTag.textContent = style;

// 将样式标签添加到文档头部
document.head.appendChild(styleTag);
