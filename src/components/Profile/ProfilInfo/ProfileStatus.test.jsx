import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
       const component = create(<ProfileStatus status="basic status"/>);
       const instance = component.getInstance();
       expect(instance.state.status).toBe("basic status");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="basic status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status="basic status"/>);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> must have a correct status", () => {
        const component = create(<ProfileStatus status="hello status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("hello status");
    });
    test("input should be displayed in edit mode", () => {
        const component = create(<ProfileStatus status="hello status"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("hello status");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello status" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});
