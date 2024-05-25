def validate_password(value):
    if len(value) < 8:
        raise ValueError("Password must be at least 8 characters long")
    if not any(char.isdigit() for char in value):
        raise ValueError("Password must contain at least one digit")
    if not any(char.islower() for char in value):
        raise ValueError("Password must contain at least one lowercase letter")
    if not any(char.isupper() for char in value):
        raise ValueError("Password must contain at least one uppercase letter")
    return value
