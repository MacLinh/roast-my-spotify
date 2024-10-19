// for testing purposes

export const groqResponse = {
    "id": "chatcmpl-9ec2461b-7e4d-435c-9fa3-fc03e8b7c1e2",
    "object": "chat.completion",
    "created": 1729308832,
    "model": "llama-3.1-70b-versatile",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "1 + 1 = 2."
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "queue_time": 0.005146967,
        "prompt_tokens": 42,
        "prompt_time": 0.01005454,
        "completion_tokens": 9,
        "completion_time": 0.036054939,
        "total_tokens": 51,
        "total_time": 0.046109479
    },
    "system_fingerprint": "fp_b6828be2c9",
    "x_groq": {
        "id": "req_01jahddd5we6prt2gbxrt8rj67"
    }
}