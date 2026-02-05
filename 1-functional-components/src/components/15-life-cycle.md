# life cycle methods

# 1 Mounting :-

constructer,
static getDerivedStateFromProps,
render and
ComponentDidMount #important

componentDidMount()
🧠 React kya karta hai?

Component screen par aa chuka hota hai

Ab safe hai async kaam karna

Tum kya karte ho?

API call

Event listener

Timer

componentDidMount() {
fetchData();
}

Kaam: Initial load ka logic
Real meaning: “Component live ho gaya”

# 2 Updating :-

static getDerivedStateFromProps,
shouldComponentUpdate,
render,
getSnapshotBeforeUpdate and
ComponentDidUpdate. #important

componentDidUpdate()
🧠 React kya karta hai?

State/props change ke baad call karta hai

Tum kya karte ho?

Change ke baad ka logic

Conditional API call

componentDidUpdate(prevProps, prevState) {
if (prevState.count !== this.state.count) {
console.log("Count changed");
}
}

Trap:
Yahan bina condition ke setState() → infinite loop

Kaam: Update ke baad reaction
Real meaning: “Kuch badla hai, ab kya karna hai?”

# 3 Unmounting :-

ComponentWillUnmount #important

componentWillUnmount()
🧠 React kya karta hai?

Component screen se hatne wala hota hai

Tum kya karte ho?

Cleanup

Timer clear

Event remove

componentWillUnmount() {
clearInterval(this.timer);
}

Kaam: Safai
Real meaning: “Jaane se pehle sab band karo”

# 4 Error Handling :-

static getDerivedFromError and
componentDidCatch.
