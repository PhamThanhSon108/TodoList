import react from "react";
import Button from "@atlaskit/button";
import CheckIcon from "@atlaskit/icon/glyph/check";
export default function Todo({todo}) {
    return <Button shouldFitContainer iconAfter={
        <span className="check-icon">
        <CheckIcon primaryColor="#4fff4f"></CheckIcon>
        </span>
    }>{todo.name}</Button>
        

    
}