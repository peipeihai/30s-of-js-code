/**
 * 搞懂 `scrollHeight`、`clientHeight`、`offsetHeight`、`scrollTop`
 * @see https://www.jianshu.com/p/d267456ebc0d
 * @see https://imweb.io/topic/57c5409e808fd2fb204eef52
 */

const bottomVisible = () => {
    const docElement = document.documentElement;
    return docElement.clientHeight + window.scrollY >= (docElement.scrollHeight || docElement.clientHeight);
}