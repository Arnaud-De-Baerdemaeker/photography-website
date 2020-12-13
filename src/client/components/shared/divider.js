// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Divider extends Component {
    render() {
        return (
            <div className={this.props.dividerContainer}>
                <img
                    src={
                        "data:image/svg+xml;base64,PHN2ZwogICAgZGF0YS1uYW1lPSJMYXllciAxIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgdmlld0JveD0iMCAwIDEyMDAgMTIwIgogICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIKPgogICAgPHBhdGgKICAgICAgICBkPSJNMCwwVjQ2LjI5YzQ3Ljc5LDIyLjIsMTAzLjU5LDMyLjE3LDE1OCwyOCw3MC4zNi01LjM3LDEzNi4zMy0zMy4zMSwyMDYuOC0zNy41QzQzOC42NCwzMi40Myw1MTIuMzQsNTMuNjcsNTgzLDcyLjA1YzY5LjI3LDE4LDEzOC4zLDI0Ljg4LDIwOS40LDEzLjA4LDM2LjE1LTYsNjkuODUtMTcuODQsMTA0LjQ1LTI5LjM0Qzk4OS40OSwyNSwxMTEzLTE0LjI5LDEyMDAsNTIuNDdWMFoiCiAgICAgICAgb3BhY2l0eT0iLjI1IgogICAgICAgIGNsYXNzPSJzaGFwZS1maWxsIgogICAgICAgIGZpbGw9IiNGMEYwRjAiCiAgICAgICAgZmlsbC1vcGFjaXR5PSIxIgogICAgPjwvcGF0aD4KICAgIDxwYXRoCiAgICAgICAgZD0iTTAsMFYxNS44MUMxMywzNi45MiwyNy42NCw1Ni44Niw0Ny42OSw3Mi4wNSw5OS40MSwxMTEuMjcsMTY1LDExMSwyMjQuNTgsOTEuNThjMzEuMTUtMTAuMTUsNjAuMDktMjYuMDcsODkuNjctMzkuOCw0MC45Mi0xOSw4NC43My00NiwxMzAuODMtNDkuNjcsMzYuMjYtMi44NSw3MC45LDkuNDIsOTguNiwzMS41NiwzMS43NywyNS4zOSw2Mi4zMiw2MiwxMDMuNjMsNzMsNDAuNDQsMTAuNzksODEuMzUtNi42OSwxMTkuMTMtMjQuMjhzNzUuMTYtMzksMTE2LjkyLTQzLjA1YzU5LjczLTUuODUsMTEzLjI4LDIyLjg4LDE2OC45LDM4Ljg0LDMwLjIsOC42Niw1OSw2LjE3LDg3LjA5LTcuNSwyMi40My0xMC44OSw0OC0yNi45Myw2MC42NS00OS4yNFYwWiIKICAgICAgICBvcGFjaXR5PSIuNSIKICAgICAgICBjbGFzcz0ic2hhcGUtZmlsbCIKICAgICAgICBmaWxsPSIjRjBGMEYwIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMSIKICAgID48L3BhdGg+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0wLDBWNS42M0MxNDkuOTMsNTksMzE0LjA5LDcxLjMyLDQ3NS44Myw0Mi41N2M0My03LjY0LDg0LjIzLTIwLjEyLDEyNy42MS0yNi40Niw1OS04LjYzLDExMi40OCwxMi4yNCwxNjUuNTYsMzUuNEM4MjcuOTMsNzcuMjIsODg2LDk1LjI0LDk1MS4yLDkwYzg2LjUzLTcsMTcyLjQ2LTQ1LjcxLDI0OC44LTg0LjgxVjBaIgogICAgICAgIGNsYXNzPSJzaGFwZS1maWxsIgogICAgICAgIGZpbGw9IiNGMEYwRjAiCiAgICAgICAgZmlsbC1vcGFjaXR5PSIxIgogICAgPjwvcGF0aD4KPC9zdmc+"
                    }
                    alt={""}
                    className={this.props.dividerImage}
                />
            </div>
        );
    }
}

export default hot(Divider);
