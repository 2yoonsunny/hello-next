export default function welcome (props) {
    console.log(props)

    return (
        <div>
            안녕하세요. 저는 웰컴입니다.
        </div>
    )
}

welcome.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return {
        posts: data
    }
}